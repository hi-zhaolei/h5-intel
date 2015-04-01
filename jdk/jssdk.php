<?php
DEFINE('APP_NAME' , 'intel');
//DEFINE('CACHE', SAE_TMP_PATH);
// saestor:// 或 saekv://
DEFINE('CACHE', "saestor://icubic/");
//DEFINE('CACHE', "saekv://");

class JSSDK 
{
	public $appId 	   = "wxea78bbb007797fce";
	public $appSecret  = "d70a06479c950242504e48799d789aa8";
	private $access_token_path = "";
	private $jsapi_ticket_path = '';

	public function __construct($appId = "", $appSecret="") 
	{
		$this->access_token_path = $this->getRealPath('access_token.json');
		$this->jsapi_ticket_path  = $this->getRealPath('jsapi_ticket.json');
		if (!file_exists($this->access_token_path)) file_put_contents($this->access_token_path , '{"access_token":"","expire_time":0}');
		if (!file_exists($this->jsapi_ticket_path)) file_put_contents($this->jsapi_ticket_path , '{"jsapi_ticket":"","expire_time":0}');

		if (!empty($appId))	$this->appId = $appId;
		if (!empty($appSecret))	$this->appSecret = $appSecret;
	}

	public function getSignPackage() {
		$jsapiTicket = $this->getJsApiTicket();
		$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
		$url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
		$url = "http://1.icubic.sinaapp.com/intel/index.html";
		$timestamp = time();
		$nonceStr = $this->createNonceStr();

		// 这里参数的顺序要按照 key 值 ASCII 码升序排序
		$string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

		$signature = sha1($string);
		$apiurl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$this->appId}&secret={$this->appSecret}";
		$result = get_url($apiurl); 
		$apiresult = json_decode($result , TRUE);

		$signPackage = array(
			"appId"     => $this->appId,
			"nonceStr"  => $nonceStr,
			"timestamp" => $timestamp,
			"url"       => $url,
			"signature" => $signature,
			"rawString" => $string,
			'access_token' => $apiresult['access_token'],
			'expires_in' => $apiresult['expires_in'],
			'server' => $_SERVER,
		);
		return $signPackage; 
	}

	protected function getRealPath($path)
	{
		$dirname = CACHE . APP_NAME;
		if (!file_exists(CACHE . APP_NAME))
		{
			mkdir($dirname , 0777 , TRUE);
		}
		$path =  $dirname . '/' . $path;
		return $path;
	}
	private function createNonceStr($length = 16) {
		$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		$str = "";
		for ($i = 0; $i < $length; $i++) {
			$str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
		}
		return $str;
	}

	private function getJsApiTicket() {
		// jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
		$data = json_decode(file_get_contents($this->jsapi_ticket_path));
		
		if ($data->expire_time < time()) {
			$accessToken = $this->getAccessToken();
			// 如果是企业号用以下 URL 获取 ticket
			// $url = "https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=$accessToken";
			$url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";
			$res = json_decode($this->httpGet($url));
			$ticket = $res->ticket;
			if ($ticket) {
				$data->expire_time = time() + 7000;
				$data->jsapi_ticket = $ticket;
				$fp = fopen($this->jsapi_ticket_path, "w");
				fwrite($fp, json_encode($data));
				fclose($fp);
			}
		} else {
			$ticket = $data->jsapi_ticket;
		}

		return $ticket;
	}

	private function getAccessToken() {
		// access_token 应该全局存储与更新，以下代码以写入到文件中做示例
		$data = json_decode(file_get_contents($this->access_token_path));
		if ($data->expire_time < time()) {
			// 如果是企业号用以下URL获取access_token
			// $url = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$this->appId&corpsecret=$this->appSecret";
			$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=$this->appSecret";
			$res = json_decode($this->httpGet($url));
			$access_token = $res->access_token;
			if ($access_token) {
				$data->expire_time = time() + 7000;
				$data->access_token = $access_token;
				$fp = fopen($this->access_token_path, "w");
				fwrite($fp, json_encode($data));
				fclose($fp);
			}
		} else {
			$access_token = $data->access_token;
		}
		return $access_token;
	}

	private function httpGet($url) {
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_TIMEOUT, 500);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($curl, CURLOPT_URL, $url);

		$res = curl_exec($curl);
		curl_close($curl);

		return $res;
	}
}

$obj = new JSSDK();
$data = $obj->getSignPackage();
echo json_encode($data);
exit;

/**
 * get_url 获取url返回值，curl方法
 * 
 * @Param $url 
 * @Param   int  $timeout 
 * @Access public
 * @Return void
 */
function get_url($url, $timeout = 1,$gzip = false) {
	$ch = curl_init ();
	//p($ch);
	curl_setopt ( $ch, CURLOPT_URL, $url );
	curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
	curl_setopt ( $ch, CURLOPT_CONNECTTIMEOUT, $timeout );
	if($gzip) curl_setopt($ch, CURLOPT_ENCODING, "gzip");
	$ret = curl_exec ( $ch );
	curl_close ( $ch );
	return $ret;
}

/**
 * post_url 提交post请求，curl方法
 *
 * @param string $url         请求url地址
 * @param array  $post_fields 变量数组
 * @return string             请求结果
 */
function post_url($url, $post_fields, $timeout = 10) {
	$post_fields = http_build_query ( $post_fields );
	$ch = curl_init ();
	curl_setopt ( $ch, CURLOPT_URL, $url );
	curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
	curl_setopt ( $ch, CURLOPT_POST, 1 );
	curl_setopt ( $ch, CURLOPT_CONNECTTIMEOUT, $timeout );
	curl_setopt ( $ch, CURLOPT_POSTFIELDS, $post_fields );
	$ret = curl_exec ( $ch );
	$error = curl_error( $ch );
	curl_close ( $ch );
	return empty($error) ? $ret : $error;
}

function P($a){
	echo "<pre>";
	print_r($a);
	echo "</pre>";
}

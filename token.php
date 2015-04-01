<?php
// exit('nidaye');
// $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxea78bbb007797fce&secret=d70a06479c950242504e48799d789aa8";
// $data = get_url($url);



class JDK {
	public $appId 	   = "wxea78bbb007797fce";
	public $appSecret  = "d70a06479c950242504e48799d789aa8";

	function getData()
	{
		$atoken = $this->getAccessToken();
		$ticket = $atoken['ticket'];
		// $url = "http://1.icubic.sinaapp.com/intel/index.html";
		$url = $_GET['url'];
		$data = array();
		$data['jsapi_ticket'] = $ticket ;
		$data['nonceStr'] = md5(uniqid());
		$data['timestamp'] = time();
		$data['url']	= $url;
		ksort($data);
		if (demo())
		{
			p($data);
		}
		$str = "";
		foreach ($data as $key => $val){
			$key = strtolower($key);
			$str .= "$key=$val&";
		}
		$str = rtrim($str , '&');

		if (demo())
		{
			p( $str);
		}
		$sign = sha1($str);
		$data['signature'] = $sign;
		$data['appId'] = $this->appId;
		return $data;
	}


	private function getAccessToken()
	{
		$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$this->appId."&secret=" . $this->appSecret;
		$result = get_url($url);
		$result = json_decode($result , TRUE);
		$url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token={$result['access_token']}&type=jsapi";
		$result = get_url($url);
		$result = json_decode($result , TRUE);
		return $result;
	}


	private function createSign()
	{
	}

}
$a = new JDK();
$res = $a->getData();
echo json_encode($res);
exit;

function p($a){
	echo "<pre>";
	print_r($a);
	echo "</pre>";
}

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
function demo(){
	return isset($_GET['debug']) && $_GET['debug'] == 1 ? TRUE: FALSE;
}
?>

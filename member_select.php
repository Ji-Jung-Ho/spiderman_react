<?

// CORS API
// 리액트서버와 PHP/MYSQL 서버주소가 서로 다르기 때문에 데이터베이서 접속 불가능하다.
// 이걸 해결하기 위해 CORS API 사용

// 1. 데이터베이스 인증 정보 (열기=접속 connection)
    // http://kiik52.dothome.co.kr/spiderman/member_select.php
    // 2. 관리자 페이지
    // http://kiik52.dothome.co.kr/myadmin/

// CORS API 접속 권한 헤더문
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


// 항상 필요한 정보
$db_server       = 'Localhost';
$db_user_name    = 'kiik52';
$db_password     = 'wlwjdgh2!#';
$db_name         = 'kiik52';
$conn = mysqli_connect($db_server, $db_user_name, $db_password, $db_name);
mysqli_set_charset($conn, 'utf8');

// 데이터 아이디 조회
$sql = "SELECT id, email FROM spiderman_member_table";
$result = mysqli_query($conn, $sql);

// 결과 값이 0보다 크면 (가입한 아이디가 있을때) 데이터가 있다 => 그 데이터를 1행씩 뽑아서 배열처리 한다.
// $result 안에 있는 배열을 가져와라
// $row = mysqli_fetch_array($result)      // 여러번 반복해야함 => 반복문이 필요

// 어떠한 조건이 만족할때까지 계속 반복하는 반복문 = while문
$imsi = array();        // 변수에 배열 선언
// 1명 이상 데이터 반복처리 1명이라도 있어야 반복문 실행 가능
if (mysqli_num_rows($result) > 0) {     // mysqli_num_rows() = 줄수를 숫자로 반환한다.
    while($row = mysqli_fetch_array($result)) {
        // 배열에 데이터를 push
        array_push($imsi, array(
            '아이디' => $row['id'],     // 배열객체 처리중
            '이메일' => $row['email']   // 배열객체 처리중
        ));
    }
}

// JSON 인코딩 진행
echo JSON_encode($imsi, JSON_UNESCAPED_UNICODE);    // 유니코드형식으로 보낸다. (그래서 unicode 사용 안함으로 해야함)

?>
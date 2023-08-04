<?

    // 1. 데이터베이스 인증 정보 (열기=접속 connection)
    // http://kiik52.dothome.co.kr/spiderman/member_insert.php
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
      
    // 2. 데이터베이스에 저장할 수 있도록 SQL(insert) 작성
    // 2-1. 입력데이터 : 입력상자 입력데이터를 받아 변수에 저장 (AJAX를 통해서 구현)
    $id             = $_POST['id'];
    $pw             = $_POST['pw'];
    $irum           = $_POST['irum'];
    $email          = $_POST['email'];
    $hp             = $_POST['hp'];
    $addr        = $_POST['addr'];     // 주소1 + 주소2
    $birth          = $_POST['birth'];    // 년 + 월 + 일
    $service        = $_POST['service'];
    $joinDate       = $_POST['joinDate'];

    // 2-2. SQL insert문 (INSERT INTO 저장할테이블이름)
    // $sql 변수 안에 = INSERT INTO + 저장할테이블이름(데이터베이스 필드(항목)) + VALUES(입력데이터);
    $sql = "INSERT INTO spiderman_member_table(id, pw, irum, email, hp, addr, birth, service, join_date)
            VALUES('$id', '$pw', '$irum', '$email', '$hp', '$addr', '$birth', '$service', '$joinDate')";

    $result = mysqli_query($conn, $sql);

    // 2-3. insert문 실행 결과 확인하기
    if( !$result ) {
        echo('데이터 저장 실패!');
    }
    else {
        // php에서는 .이 +연산자
        echo($irum . '데이터 저장 성공!');
    }
    // 3. 데이터베이스 닫기
?>
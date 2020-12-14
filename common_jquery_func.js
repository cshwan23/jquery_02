function insertYMD_to_select3(
    yearObj   // 년도 관련 select 태그를 관리하는 JQuery 객체
    ,monthObj // 월 관련 select 태그를 관리하는 JQuery 객체
    ,dateObj  // 일 관련 select 태그를 관리하는 JQuery 객체
    ,min_year // 최소 년도
    ,max_year // 최대 년도
    ,year_asc_or_desc//년도의 오름차순(asc) 또는 내림차순(desc)옵션, 1이면 오름차순 2면 내림차순
){

    try{
        // 6번째 매개변수 인자를 안던져 주면 1(오름차순)로 하겠다라는 코딩.
        //------------------------------------------
        // 매개변수 year_asc_or_desc가 undefined 이면 
        // = 즉 매개변수 year_asc_or_desc로 데이터가 안들어오면
        //------------------------------------------
        if(year_asc_or_desc==undefined){
            year_asc_or_desc= 1;
        }
        //------------------------------------------
        // 년도 관련 select 태그를 관리하는 JQuery 객체의 append 메소드를 호출하여
        // 년도 관련 select 태그 내부에 <option value="년도숫자">년도숫자</option>태그 삽입하기
        //------------------------------------------
        for(var i = min_year; i <= max_year; i++){	
            if(year_asc_or_desc==1){
            yearObj.append("<option value="+i+">"+i+"</option>");
            }
            if(year_asc_or_desc==2){
            yearObj.prepend("<option value="+i+">"+i+"</option>");
            }
        }
        //------------------------------------------
        // 월 관련 select 태그를 관리하는 JQuery 객체의 append 메소드를 호출하여
        // 월 관련 select 태그 내부에 <option value="월숫자">월숫자</option>태그 삽입하기
        //------------------------------------------
        for(var i = 1; i <= 12; i++){
            if(i<10){	
                monthObj.append("<option value=0"+i+">0"+i+"</option>");
            }else{
                monthObj.append("<option value="+i+">"+i+"</option>");
            }
        }
        //------------------------------------------
        // 일 관련 select 태그를 관리하는 JQuery 객체의 append 메소드를 호출하여
        // 일 관련 select 태그 내부에 <option value="일숫자">일숫자</option>태그 삽입하기
        //------------------------------------------
        for(var i = 1; i <= 31; i++){	
            if(i<10){	
                dateObj.append("<option value=0"+i+">0"+i+"</option>");
            }else{
                dateObj.append("<option value="+i+">"+i+"</option>");
            }
        }
    }catch(ex){
        alert("insertYMD_to_select3 함수 호출 시 예외발생!\n"+ex.message)
    }
}

//*********************************
//*********************************
function insertValidDate(
yearObj // 년도 관련 select 태그를 관리하는 JQuery 객체 
,monthObj
,dateObj
){
        //-----------------------------------------------
        // 년도 관련 태그를 관리하는 JQuery 객체의 val 메소드 호출로
        // 년도 관리 태그의 value 값 얻기 = 선택한 년도 얻기
        //-----------------------------------------------
        var birth_year = yearObj.val();
        //-----------------------------------------------
        // 월 관련 태그를 관리하는 JQuery 객체의 val 메소드 호출로
        // 월 관리 태그의 value 값 얻기 = 선택한 년도 얻기
        //-----------------------------------------------
        var birth_month = monthObj.val();
        //-----------------------------------------------
        // 일 관련 태그를 관리하는 JQuery 객체의 val 메소드 호출로
        // 일 관리 태그의 value 값 얻기 = 선택한 년도 얻기
        //-----------------------------------------------
        var birth_date = dateObj.val();
        //-----------------------------------------------
        // 년과 월이 있으면 = 년과 월이 숫자로 선택되었으면
        //-----------------------------------------------
        if(birth_year!=="" && birth_month!==""){
            //-----------------------------------------------
            // 년과 월에 해당하는 마지막 날짜를 관리하는 Date 객체 생성하고
            // 월일 구하기=즉 선택한 년,월의 마지막 일을 구하기
            //----------------------------------------------- 
            var last_date = new Date(
                parseInt(birth_year,10)
                ,parseInt(birth_month,10)
                ,0).getDate();

                //-----------------------------------------------
                // 일을 표현하는 태그를 JQuery 객체의 empty 메소드를 호출하여
                // 일을 표현하는 태그의 내부를 비우기 = 일을 표현하는 태그의 내부의 option 태그 없애기
                //-----------------------------------------------
                dateObj.empty();
                //-----------------------------------------------
                // 일을 표현하는 태그를 JQuery 객체의 append 메소드를 호출하여
                // 일을 표현하는 태그의 내부에 <option value=''></option>을 막내아들로 삽입하기
                //-----------------------------------------------
                dateObj.append("<option value=''></option>");
                //-----------------------------------------------
                // 일을 표현하는 태그를 JQuery 객체의 append 메소드를 호출하여
                // 일을 표현하는 태그의 내부에 1~마지막일수까지 <option value='일수'>일수</option>을 삽입하기
                //-----------------------------------------------
            for(var i=1; i<=last_date; i++){
                if(i<10){
                    dateObj.append("<option value=0"+i+">0"+i+"</option>");
                }else{
                    dateObj.append("<option value="+i+">"+i+"</option>");
                }
                //------------------------
                // 선택한 일이 비어있지 않으면
                //------------------------
                if(birth_date!=""){
                    //일을 표현하는 태그를 JQuery 객체의 val 메소드를 호출하여 원래 선택한 일을 다시 선택하기
                    dateObj.val(birth_date);
                }
            }
        }

}
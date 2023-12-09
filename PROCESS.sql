DECLARE 
    PARAM1 VARCHAR2(4000);
    PARAM2 VARCHAR2(100); 
BEGIN
PARAM1:=apex_application.g_x01;
PARAM2:=apex_application.g_x02;
htp.p('You have called the Ajax Process with to parameters ' || PARAM1 ||' and '|| PARAM2 ||' and page item value '||:P1_PARAM );
EXCEPTION
WHEN OTHERS THEN    
    htp.p('ERROR IN AJAX CALLBACK PROCESS');
   
END;

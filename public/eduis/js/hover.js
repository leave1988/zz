//�趨��Ŀ������¼�

function doClick_risingmenu(o){
	
	 o.className="navmenu_on"; 
	 var j; 
	 var id; 
	 var e; 
	 for(var i=1;i<=15;i++){ 
	   id ="risingmenu"+i;  
	   j = document.getElementById(id); 
	   e = document.getElementById("sub_con"+i);  
	    if(id != o.id){
	    	if (j) {
	    		j.className="navmenu_off";   	
				e.style.display = "none";
	    	}
		}
	    else{  
		   e.style.display = "block";	
	       }
	   }
	 }
	 //�趨��Ŀ��Ĭ��ѡ��
function doView_risingmenu(o,intI,intJ){
	 o.className="navmenu_on";
	  var j; 
	  var id; 
	  var e;
	  var f; 
	  for(var i=1;i<=15;i++){  
	    id ="risingmenu"+i;   
	    j = document.getElementById(id);  
		e = document.getElementById("sub_con"+i);   
	      if(id != "risingmenu"+intI){   //����һ������ʽ
	   	    j.className="navmenu_off";	 //���ö����Ĳ���ʾ
	   	    e.style.display = "none"; 
	        }
		else{   
	       j.className="navmenu_on";	
		   e.style.display = "block";	
		   if(intJ!=0){	f = document.getElementById("sub_con"+i+"_"+intJ);	
		    //���ö�������ʽ
		  f.className="submenu_on";	
		}
	   }
	 }
 }
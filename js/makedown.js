
function createMakedown(){
   var makedownObj=new  Object;

   //处理makedown标题
   makedownObj.makedownTitle=function(makedownString){
      var makedownItemArray=makedownString.split(' ',2);
      switch(makedownItemArray[0]){
        case "#":{
           var makedownPage="<div class='makedown-h1'>"+makedownItemArray[1]+"</div>";
           return makedownPage;
           break;
         }
         case "##":{
            var makedownPage="<div class='makedown-h2'>"+makedownItemArray[1]+"</div>";
            return makedownPage;
            break;
          }
          default:{
          }

      }
   }

   //处理makedown图片
   makedownObj.makedownImg=function(makedownString){
     var img_alt_regExp=/\[(.*)\]/gi;
     var img_src_regExp=/\((.*)\)/gi;
     var img_alt=img_alt_regExp.exec(makedownString)[1];
     var img_src=img_src_regExp.exec(makedownString)[1];
     console.log(img_src[1]);
     var makedownPage="<img alt='"+img_alt+"' src='"+img_src+"'>";
     return makedownPage;
   }

   //处理makedown链接
   makedownObj.makedownLink=function(makedownString){
     var link_text_regExp=/\[(.*)\]/gi;
     var link_href_regExp=/\((.*)\)/gi;
     var link_text=link_text_regExp.exec(makedownString)[1];
     var link_href=link_href_regExp.exec(makedownString)[1];
     var makedownPage="<div><a target='_blank' href='"+link_href+"'>"+link_text+"</a><div>";
     return makedownPage;
   }

   makedownObj.show=function(id){
     var makedownPage="";
     var makedownText=document.getElementById(id).innerHTML;
     var makedownTextArray=makedownText.split('\n');
     makedownTextArray.forEach(function(makedownItem,makedownIndex){
       var makedownItemString=makedownItem.trim();

       switch(makedownItemString[0]){
         //标题处理
         case "#":{
            makedownPage+=makedownObj.makedownTitle(makedownItemString);
            break;
          }
          //图片处理
          case "!":{
          makedownPage+=makedownObj.makedownImg(makedownItemString);
             break;
           }
           //链接
           case "[":{
           makedownPage+=makedownObj.makedownLink(makedownItemString);
              break;
            }
          default:{
          }
       }


     });


     console.log(makedownPage);

    document.write(makedownPage);

   }

   return makedownObj;
}

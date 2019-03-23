/**复制下面内容作为新添项

  {
    number: "01", //序号  <br>
    serial: "123", //序列号
    picture: "1.gif", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video 文字：text
    media: "1.gif", //媒体文件名
    remark: ""  //备注   如果没有备注  media 后面要删掉逗号 英文
  },

**/



var LISTS = [
  {
    number: "001<br>9 Juin 2018, 14:34", //序号
    serial: "13", //序列号
    picture: "13.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "13.jpg" //媒体文件名
  },

  {
    number: "002<br>9 Juin 2018, 15:00", //序号
    serial: "19", //序列号
    picture: "19.jpg", //图片名称
    type: "video",//媒体类型 图片：img 音频：audio 视频：video
    media: "19.mp4" //媒体文件名
  },
  {
    number: "003<br>9 Juin 2018, 16:18", //序号
    serial: "17", //序列号
    picture: "17.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "17.jpg" //媒体文件名   
  },
  {
    number: "004<br>9 Juin 2018, 16:50", //序号
    serial: "74", //序列号
    picture: "74.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "74.jpg" //媒体文件名
  },
  {
    number: "005<br>9 Juin 2018, 16:50", //序号
    serial: "62", //序列号
    picture: "62.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "62.jpg" //媒体文件名
  },
  {
    number: "006<br>9 Juin 2018, 17:01", //序号
    serial: "5", //序列号
    picture: "5.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "5.jpg" //媒体文件名
  },
  {
    number: "007<br>9 Juin 2018, 17:12", //序号
    serial: "81", //序列号
    picture: "81.jpg", //图片名称
    type: "audio",//媒体类型 图片：img 音频：audio 视频：video
    media: "81.m4a" //媒体文件名
   
  },
  {
    number: "008<br>9 Juin 2018, 17:15", //序号
    serial: "3", //序列号
    picture: "3.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "3.jpg" //媒体文件名
  },
  {
    number: "009<br>9 Juin 2018, 17:40", //序号
    serial: "61", //序列号
    picture: "61.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "61.jpg" //媒体文件名
  },
  {
    number: "010<br>9 Juin 2018, 17:46", //序号
    serial: "49", //序列号
    picture: "49.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "49.jpg" //媒体文件名
  },
  {
    number: "011<br>9 Juin 2018, 17:47", //序号
    serial: "4", //序列号
    picture: "4.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "4.jpg" //媒体文件名
  },
  {
    number: "012<br>9 Juin 2018, 17:53", //序号
    serial: "79", //序列号
    picture: "79.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "79.jpg" //媒体文件名
  },
  {
    number: "013<br>9 Juin 2018, 17:57", //序号
    serial: "16", //序列号
    picture: "16.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "16.jpg" //媒体文件名
  },
  {
    number: "014<br>9 Juin 2018, 17:57", //序号
    serial: "58", //序列号
    picture: "58.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "58.jpg" //媒体文件名
  },
  {
    number: "015<br>9 Juin 2018, 18:11", //序号
    serial: "20", //序列号
    picture: "20.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "20.jpg" //媒体文件名
  },
  {
    number: "016<br>9 Juin 2018, 18:33", //序号
    serial: "55", //序列号
    picture: "55.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "UN CALIN" //媒体文件名
  },
  {
    number: "017<br>10 Juin 2018, 18:02", //序号
    serial: "54", //序列号
    picture: "54.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "54.jpg" //媒体文件名
  },
  {
    number: "018<br>10 Juin 2018, 18:02", //序号
    serial: "10", //序列号
    picture: "10.jpg", //图片名称
    type: "audio",//媒体类型 图片：img 音频：audio 视频：video
    media: "10.m4a"//媒体文件名

  },
  {
    number: "019<br>10 Juin 2018, 19:33", //序号
    serial: "39", //序列号
    picture: "39.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "SE PARLER : DE L'EAU ET L'ENERGIE" //媒体文件名
  },
  {
    number: "020<br>10 Juin 2018, 21:15", //序号
    serial: "1", //序列号
    picture: "1.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "1.jpg" //媒体文件名
  },
  {
    number: "021<br>12 Juin 2018, 14:06", //序号
    serial: "25", //序列号
    picture: "25.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "25.jpg" //媒体文件名
  },
  {
    number: "022<br>12 Juin 2018, 14:28", //序号
    serial: "103", //序列号
    picture: "103.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "103.jpg" //媒体文件名
  }, {
    number: "023<br>12 Juin 2018, 14:58", //序号
    serial: "29", //序列号
    picture: "29.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "29.jpg" //媒体文件名
  }, {
    number: "024<br>12 Juin 2018, 14:58", //序号
    serial: "45", //序列号
    picture: "45.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "45.jpg" //媒体文件名
  },{
    number: "025<br>12 Juin 2018, 16:27", //序号
    serial: "41", //序列号
    picture: "41.jpg", //图片名称
    type: "audio",//媒体类型 图片：img 音频：audio 视频：video
    media: "41.m4a" //媒体文件名
 
  },{
    number: "026<br>12 Juin 2018, 16:32", //序号
    serial: "59", //序列号
    picture: "59.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "59.jpg" //媒体文件名
  },{
    number: "027<br>12 Juin 2018, 16:34", //序号
    serial: "111", //序列号
    picture: "111.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "111.jpg" //媒体文件名
  },{
    number: "028<br>12 Juin 2018, 16:36", //序号
    serial: "80", //序列号
    picture: "80.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "80.jpg" //媒体文件名
  },{
    number: "029<br>12 Juin 2018, 16:38", //序号
    serial: "105", //序列号
    picture: "105.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "105.jpg" //媒体文件名
  },
{
    number: "030<br>12 Juin 2018, 17:20", //序号
    serial: "119", //序列号
    picture: "119.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "SE PARLER : LA PHOTO" //媒体文件名
  },
{
    number: "031<br>14 Juin 2018, 14:54", //序号
    serial: "128", //序列号
    picture: "128.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "SE PARLER : LA BOUDDHISME" //媒体文件名
  },
{
    number: "032<br>14 Juin 2018, 15:14", //序号
    serial: "82", //序列号
    picture: "82.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "82.jpg" //媒体文件名
  },
{
    number: "033<br>14 Juin 2018, 15:38", //序号
    serial: "68", //序列号
    picture: "68.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "68.jpg" //媒体文件名
  },
{
    number: "034<br>14 Juin 2018, 15:40", //序号
    serial: "70", //序列号
    picture: "70.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "70.jpg" //媒体文件名
  },
{
    number: "035<br>14 Juin 2018, 15:44", //序号
    serial: "64", //序列号
    picture: "64.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "SE PARLER<br>(PRESQUE)" //媒体文件名
  },
{
    number: "035<br>14 Juin 2018, 15:50", //序号
    serial: "38", //序列号
    picture: "38.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "38.jpg" //媒体文件名
  },
{
    number: "036<br>14 Juin 2018, 15:51", //序号
    serial: "53", //序列号
    picture: "53.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "53.jpg" //媒体文件名
  },
{
    number: "037<br>14 Juin 2018, 15:55", //序号
    serial: "91", //序列号
    picture: "91.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "91.jpg" //媒体文件名
  },
{
    number: "038<br>14 Juin 2018, 16:07", //序号
    serial: "23", //序列号
    picture: "23.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "23.jpg" //媒体文件名
  },
{
    number: "039<br>14 Juin 2018, 16:31", //序号
    serial: "101", //序列号
    picture: "101.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "101.jpg" //媒体文件名
  },
{
    number: "040<br>14 Juin 2018, 16:35", //序号
    serial: "77", //序列号
    picture: "77.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "SE PARLER<br>(PRESQUE)" //媒体文件名
  },
{
    number: "041<br>14 Juin 2018, 16:56", //序号
    serial: "63", //序列号
    picture: "63.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "63.jpg" //媒体文件名
  },
{
    number: "042<br>14 Juin 2018, 16:59", //序号
    serial: "14", //序列号
    picture: "14.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "14.jpg" //媒体文件名
  },
{
    number: "043<br>14 Juin 2018, 17:10", //序号
    serial: "116", //序列号
    picture: "116.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "116.jpg" //媒体文件名
  },
{
    number: "044<br>14 Juin 2018, 17:28", //序号
    serial: "52", //序列号
    picture: "52.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "52.jpg" //媒体文件名
  },
{
    number: "045<br>14 Juin 2018, 17:32", //序号
    serial: "67", //序列号
    picture: "67.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "《QUE RESTERA-T-IL ?》<br>JHONNY HALLIDAY" //媒体文件名
  },
{
    number: "046<br>14 Juin 2018, 17:28", //序号
    serial: "15", //序列号
    picture: "15.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "《エリ┼ゼ》<br>THE BEETHOVEN" //媒体文件名  
  },
{
    number: "047<br>14 Juin 2018, 17:38", //序号
    serial: "73", //序列号
    picture: "73.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "73.jpg" //媒体文件名
  },
{
    number: "048<br>14 Juin 2018, 17:44", //序号
    serial: "122", //序列号
    picture: "122.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "122.jpg" //媒体文件名
  },
{
    number: "049<br>14 Juin 2018, 17:46", //序号
    serial: "36", //序列号
    picture: "36.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "UN CALIN" //媒体文件名
  },
{
    number: "050<br>14 Juin 2018, 17:47", //序号
    serial: "83", //序列号
    picture: "83.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "83.jpg" //媒体文件名
  },
{
    number: "051<br>14 Juin 2018, 17:52", //序号
    serial: "109", //序列号
    picture: "109.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "109.jpg" //媒体文件名
  },
{
    number: "052<br>14 Juin 2018, 18:09", //序号
    serial: "18", //序列号
    picture: "18.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "18.jpg" //媒体文件名
  },
{
    number: "053<br>14 Juin 2018, 18:09", //序号
    serial: "28", //序列号
    picture: "28.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "06 51 ** 00 78<br>SON NUMERO DE PORTABLE" //媒体文件名
  },
{
    number: "054<br>14 Juin 2018, 18:09", //序号
    serial: "123", //序列号
    picture: "123.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "123.jpg" //媒体文件名
  },
{
    number: "055<br>14 Juin 2018, 18:15", //序号
    serial: "69", //序列号
    picture: "69.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "UN GESTE DE FAIRE COUCOU" //媒体文件名
  },
{
    number: "056<br>14 Juin 2018, 18:17", //序号
    serial: "27", //序列号
    picture: "27.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "27.jpg" //媒体文件名
  },
{
    number: "057<br>14 Juin 2018, 18:34", //序号
    serial: "24", //序列号
    picture: "24.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "SE PARLER<br>(ECHOUE)" //媒体文件名
  },
{
    number: "058<br>14 Juin 2018, 18:34", //序号
    serial: "76", //序列号
    picture: "76.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "SE PARLER<br>(ECHOUE)" //媒体文件名
  },
{
    number: "059<br>14 Juin 2018, 18:42", //序号
    serial: "50", //序列号
    picture: "50.jpg", //图片名称
    type: "img",//媒体类型 图片：img 音频：audio 视频：video
    media: "50.jpg" //媒体文件名
  },
{
    number: "060<br>14 Juin 2018, 18:47", //序号
    serial: "65", //序列号
    picture: "65.jpg", //图片名称
    type: "text",//媒体类型 图片：img 音频：audio 视频：video
    media: "UN SOURIRE D'INNOCENCE" //媒体文件名
  },
];

function showPic(ele){
  $("#exampleModalCenter").find("img").attr("src",$(ele).attr("src"));
  $("#exampleModalCenter").modal("show");
}
$(function(){
  for(var i=0;i<LISTS.length;i++){
    var tr = $("<tr></tr>");
    var td0 = $("<td></td>");
    var td0_span = $("<span></span>");
    td0_span.html(LISTS[i].number);
    td0.append(td0_span);
    tr.append(td0);
    var td1 = $("<td></td>");
    var td1_span = $("<span></span>");
    td1_span.html(LISTS[i].serial);
    td1.append(td1_span);
    tr.append(td1);
    var td2 = $("<td></td>");
    var td2_img = $("<img onclick='showPic(this)'/>");
    td2_img.attr("src","./images/"+LISTS[i].picture);
    td2.append(td2_img);
    tr.append(td2);
    var td3 = $("<td></td>");
    if(LISTS[i].type=='img'){
      var td3_media = $("<img onclick='showPic(this)'/>");
      td3_media.attr("src","./media/"+LISTS[i].media);
    }else if(LISTS[i].type=='audio'){
      var td3_media = $("<audio controls></audio>");
      td3_media.attr("src","./media/"+LISTS[i].media);
    }else if(LISTS[i].type=="video"){
      var td3_media = $("<video controls></video>");
      td3_media.attr("src","./media/"+LISTS[i].media);
    }else if(LISTS[i].type=="text"){
      var td3_media = $("<span></span>");
      td3_media.html(LISTS[i].media);
    }
    td3.append(td3_media);
    if(LISTS[i].remark){
      var td3_span = $("<p style='margin-top: 20px'></p>");
      td3_span.html(LISTS[i].remark);
      td3.append(td3_span);
    }
    tr.append(td3);
    $(".table tbody").append(tr);
  }
});
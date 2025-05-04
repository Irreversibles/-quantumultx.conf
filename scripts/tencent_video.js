/*
腾讯视频去广告脚本
*/
body = body.replace(/<div class="mod_vip_popup.*?>.*?<\/div>/g, '');
body = body.replace(/<div id="vip_tips".*?>.*?<\/div>/g, '');
body = body.replace(/<div class="video_operation_bottom.*?>.*?<\/div>/g, '');
body = body.replace(/<div class="bottom_bar".*?>.*?<\/div>/g, '');
body = body.replace(/<div class="video_title_bar.*?>.*?<\/div>/g, '');
body = body.replace(/<div class="mod_player_operation.*?>.*?<\/div>/g, '');
body = body.replace(/<div class="player_cover.*?>.*?<\/div>/g, '');
body = body.replace(/QZOutputJson = {.*?};/g, 'QZOutputJson = {};');
 $done({ body });

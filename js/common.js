// 页面刚出现时的效果
// $(document).ready(function(){
//     $('body').append(`<style>body::before{
//         top: 0;
//     }</style>`);
//     // 0.3s后隐藏  因为动画有1s所有事1300
//     setTimeout(() => {
//         $('body').append(`<style>body::before{
//             opacity:0
//         }</style>`);
//     },1300)
//     // 需要隐藏 不然点击不了页面
//     setTimeout(() => {
//         $('body').append(`<style>body::before{
//             display:none;
//         }</style>`);
//     },2000)
// })
function delayURL(url){
    $('body').append(`<style>body::before{
        top: 0;
    }</style>`);
    setTimeout("window.location.href = '" + url + "'",800);
}
// 回到顶部

$('#go-top').click(function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

// 初始化滚动条
new CusScrollBar({
    contentSelector: '.scroll_cont', //滚动内容区
    barSelector: '.scroll_bar', //滚动条
    sliderSelector: '.scroll_slider' //滚动滑块
});

$('.scroll_cont').scroll(function(e){
    let top = -$('.scroll_slider').css('top').split('p')[0]*0.2;
    let opacity = 1-$('.scroll_slider').css('top').split('p')[0]*0.01;
    $('.header').css({'top':top+'px','opacity':opacity})
})

// 产品也左侧菜单栏
$('.menu-mobile').click(function(){
    $(this).hide(300);
    $('.products-left').show(300);
    $('.product-left-modal').show();
})
$('.product-left-modal').click(function(){
    $('.menu-mobile').show(300);
    $('.products-left').hide(300);
    $('.product-left-modal').hide();
})

// 上弹信息
$('.anim-item').hover(function(){
    $(this).find('.anim-item-desc').slideToggle();
    $(this).find('.anim-item-bottom-header').css("color","#000000");
},function(){
    $(this).find('.trend-item-desc').slideToggle();
    $(this).find('.trend-item-bottom-header').css("color","#999999");
})
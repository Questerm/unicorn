/**
 * 点击元素时，矩形选择框出现
 * f父盒子
 * rect矩形选择框
 * e点击的元素
 */
export default (e,p, rect) => {
    rect.style.width = p.width + 'px';
    rect.style.height = e.target.offsetHeight + 'px';
    rect.style.left = p.left + 'px';
    rect.style.top = p.top + 'px';
    rect.style.transform = 'rotate(' + p.rotate + 'deg)';

    if (e.target.className == 'text') {//如果是文本框不应该有改变大小的上下按钮
        rect.querySelector('.t').style.display='none';
        rect.querySelector('.b').style.display = 'none';
        rect.querySelector('.lt').style.display='none';
        rect.querySelector('.lb').style.display = 'none';
        rect.querySelector('.rt').style.display='none';
        rect.querySelector('.rb').style.display='none';
    } else {//如果是非文本框 应该有改变大小的上下按钮
        rect.querySelector('.t').style.display='block';
        rect.querySelector('.b').style.display='block';
    }
    return true;
}
/**
 * 点击元素时，矩形选择框出现
 * f父盒子
 * rect矩形选择框
 * e点击的元素
 */
export default (e, p, rect) => {
    rect.style.width = p.style.width + 'px';
    rect.style.height = e.target.offsetHeight + 'px';
    rect.style.left = p.style.left + 'px';
    rect.style.top = p.style.top + 'px';
    rect.style.transform = 'rotate(' + p.style.rotate + 'deg)';

    if (p.class == 'text') { //如果是文本框不应该有改变大小的上下按钮
        rect.querySelector('.t').style.display = 'none';
        rect.querySelector('.b').style.display = 'none';
        rect.querySelector('.lt').style.display = 'none';
        rect.querySelector('.lb').style.display = 'none';
        rect.querySelector('.rt').style.display = 'none';
        rect.querySelector('.rb').style.display = 'none';
    } else if (p.class == "img") { //如果是文本框不应该有改变大小的上下按钮
        rect.querySelector('.t').style.display = 'none';
        rect.querySelector('.b').style.display = 'none';
        rect.querySelector('.l').style.display = 'none';
        rect.querySelector('.r').style.display = 'none';
    } else { //如果是非文本框 应该有改变全部按钮
        const rectChild = rect.querySelectorAll('span');
        for (let i = 0; i < rectChild.length; i++) {
            rectChild[i].style.display = 'block';
        }
    }
    return true;
}
/**
 * @author 🌈先知云 <公众号：先知云，微信：zhl632231327>
 * @date ⌚2021/2/2
 * @description 📝 loader
 */

function replace(source) {
    // 使用正则把 // @require '../style/index.css' 转换成 require('../style/index.css');
    // return source.replace(/(\/\/ *@require) +(('|").+('|")).*/, 'require($2);');
    // 删除动态加载路由
    // let c1 = source.split(',')
    // let c2 = ''
    // c1.map((item) => {
    //     if (item.indexOf('component') == -1) {
    //         c2 += (item + ',')
    //     }
    // })
    // source = c2.substring(0, c2.lastIndexOf(','))
    source = source.replace(/import Layout from '@\/vt-subtree\/vt-layout\/index';/g, '');
    source = source.replace(/component:.*,/gm, '');
    return source
}

module.exports = function (content) {
    return replace(content);
};

//导出指令的配置对象
// export default {
//     // bind() {
//     //     //只调用一次，指令第一次绑定到元素时调用。这里可以进行一次性的初始化设置
//     // },
//     // inserted() {
//     //     //被绑定元素父节点调用时
//     // },
//     // updated() {
//     //     //所在组件的VNode 更新时调用
//     // }
//     bind(el, binding) {
//         //创建一个img元素，放到el元素内部
//     },
//     update(el, binding) {
//         //根据binding，value的值，决定创建和删除img元素
//     }
// }

import LoadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

function getLoadingImage(el) { //得到el中loading效果的img元素
    return el.querySelector("img[data-role=loading]")
}

function createLoadingImage() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = LoadingUrl;
    img.className = styles.loading;
    return img;
}

export default function (el, binding) {
    //根据binding.value的值，决定创建或者删除img元素
    const curImg = getLoadingImage(el)
    if (binding.value) {
        if (!curImg) { //判断img是否存在
            //创建img元素
            const img = createLoadingImage();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}
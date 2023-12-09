// content.js

// 遍历页面上 class 为 "filter-layout-content" 的 div 元素
function traverseFilterLayoutContentDivs() {
  const filterLayoutContentDivs = document.querySelectorAll('.filter-layout-content');
  
  filterLayoutContentDivs.forEach(div => {
    // 在这里对每个 div 进行操作
    console.log(div.textContent); // 例: 输出 div 内容
  });
}

// 在页面加载完成后执行遍历操作
window.addEventListener('load', traverseFilterLayoutContentDivs);

/* ذخیره با نام: script.js */

// صفحه 1: انتقال خودکار به صفحه 2
setTimeout(() => {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
}, 4000);

// صفحه 2: ویرایش پروفایل
function editProfile() {
  let name = prompt("نام خود را وارد کنید:");
  let family = prompt("نام خانوادگی خود را وارد کنید:");
  document.getElementById("profileData").innerHTML = `
    <p>نام: ${name || ''}</p>
    <p>نام خانوادگی: ${family || ''}</p>
    <p>امتیازها: 0</p>
  `;
}

// صفحه 3: نمایش نماد ریاضی
function convertCondition(cond) {
  return cond.replace(/بزرگتر مساوی/gi,"≥")
             .replace(/کوچکتر مساوی/gi,"≤")
             .replace(/بزرگتر/gi,">")
             .replace(/کوچکتر/gi,"<")
             .replace(/مساوی/gi,"=");
}

function makeExpression() {
  let set = document.getElementById("knownSet").value;
  let cond = document.getElementById("textCondition").value.trim();
  if(!set){ alert("لطفاً یک مجموعه انتخاب کنید"); return;}
  if(!cond){ alert("لطفاً شرط را وارد کنید"); return;}
  let expression = `{ x ∈ ${set} | ${convertCondition(cond)} }`;
  document.getElementById("mathResult").innerText = expression;
}

// صفحه 4: نمایش اعضا
document.getElementById("memberDisplay").addEventListener("change", function(){
  let val = this.value;
  let box = document.getElementById("output");
  if(val==="list"){ box.innerText = "{1, 2, 3, ...}"; }
  else{ box.innerText = "{ x ∈ N | x ≥ 1 }"; }
});

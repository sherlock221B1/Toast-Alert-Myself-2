const buttonTag = document.querySelector(".button");
const alertContainerTag = document.querySelector(".alertContainer");

const openAlert = ()=>{
    alertContainerTag.innerHTML = ""; // တစ်ခါနှိပ်တိုင်း တစ်ခါရှင်းပြီးမှ ပြန်စမယ်။
    const alertTag = document.createElement("div");
    alertTag.append("Hello, nice to meet you!");
    alertTag.classList.add("alert");
    alertContainerTag.append(alertTag);

    alertTag.style.bottom = `-${alertTag.offsetHeight}px`; //ပထမဆုံးအောက်ကိုချထားမယ်။ပြီးမှ transitionနဲ့တက်လာမယ်။
    setTimeout(
        ()=>{
            alertTag.style.bottom = "0px"; //ဒီမှာ setTimeout နဲ့လုပ်ပေးရမယ်။ မဟုတ်ရင် ဆက်တိုက်ရေးသလိုဖြစ်ပြီး transition မမြင်ရတော့ဘူး။
        }, 200
    )

    setTimeout(
        ()=>{
            alertTag.style.bottom = `-${alertTag.offsetHeight}px`; // အောက်ကိုပြန်ချမယ်
        },1600
    )
}
buttonTag.addEventListener("click", openAlert);
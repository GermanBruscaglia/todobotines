export default function sliderTime(){  
        const $slide = document.querySelectorAll(".slide")
     
        let i = 0

    setInterval(() => {
        if($slide[i]){
            $slide[i].classList.remove("active")
            i++

        if(i>= $slide.length){
            i = 0
        }

        $slide[i].classList.add("active")
        }
        

    }, 3000);

}


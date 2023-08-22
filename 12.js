class AnnouncementBanner {
    constructor(){
        this.banner = document.getElementById('announcementBanner')
        this.spacer = document.querySelector('.header-spacer')
        this.header = document.querySelector('header')
        this.closeButton = this.banner.querySelector('.announcementBanner__close')
        this.dataBannerText = this.banner.getAttribute('data-banner-text')
        this.dataBannerCurrentDate = this.banner.getAttribute('data-banner-current-date')
        this.init() 
    }

    init(){

        if(
            !localStorage.getItem("cmgBannerClosed") || 
            localStorage.getItem("cmgBannerClosed") != this.dataBannerText ||
            Number(localStorage.getItem("cmgBannerClosedDate")) + (7 * 24 * 60 * 60) < Number(this.dataBannerCurrentDate)
        ){
            // this.banner.classList.remove('hidden')
            document.body.style.transition = "padding 0.4s ease"

            this.banner.classList.remove('hidden')
            document.body.style.paddingTop = this.header.offsetHeight + 'px'
            this.banner.classList.add('hidden')

            jQuery(this.banner).slideDown({
                complete: ()=>{
                }
            })
            
            
        }
        this.closeButton.addEventListener('click', () => {this.handleClose()})
    }

    handleClose(){
        localStorage.setItem("cmgBannerClosed", this.dataBannerText)
        localStorage.setItem("cmgBannerClosedDate", this.dataBannerCurrentDate)
        jQuery(this.banner).slideUp({
            complete: ()=>{
                this.banner.remove()
                document.body.style.paddingTop = this.header.offsetHeight + 'px'
            }
        })
    }
}


jQuery(document).ready(function() {
    if(document.querySelector('#announcementBanner')){
        var announcementBanner = new AnnouncementBanner();
    }
})
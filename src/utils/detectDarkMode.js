const detectDarkMode= () => {
if(window.matchMedia && window.matchMedia("(prefers-color-sheme: dark)").matches){
    return 'dark'
}
    return 'light'
}


export default detectDarkMode;
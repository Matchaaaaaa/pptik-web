import React from "react"

const Footer = () => {
    return (
        <footer className="bg-neutral-200  text-center justify-center flex flex-col">
            <div className="p-4 text-center text-neutral-800 dark:text-neutral-800 flex flex-row justify-center space-x-2">
                <img src="https://pptik.itb.ac.id/wp-content/themes/itb-new-2015-update/img/itb.png" alt="" width="20px" className="ml-[10px]"/>
                <a className="text-neutral-800 dark:text-neutral-400 no-underline" href="https://pptik.itb.ac.id/">Institut Teknologi Bandung</a>
                <h1 className="text-neutral-800">© 2023. All Rights Reserved.</h1>

            </div>
        </footer>
    )
}

export default Footer
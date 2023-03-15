import React from "react"

function Header(){
    return(
        <>
            <img src="https://scontent.fmnl26-1.fna.fbcdn.net/v/t39.30808-6/314940824_5576926955731983_1518828914111560704_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGTSnIrEwhd5Keht-q0WseyyY4E0BejCsbJjgTQF6MKxhXhoXwLVo5ZEKCSKbwtFIg3OdiQ_u-FlsVCvHDV1Q68&_nc_ohc=GOadI-xQxhAAX_AC-1S&_nc_zt=23&_nc_ht=scontent.fmnl26-1.fna&oh=00_AfCUWRwS-TTKwb27uF3d3BzCM5wrEW5avwTdXPMW_bXlSQ&oe=6417DF8C"></img>
            <p className="FullName">Auriel James Fernandez</p>
            <p className="Position">Web Developer</p>
            <p className="Company">Unknown</p>
            <button className="Email" href="https://www.facebook.com/aurieljames11"><b>Facebook</b></button>
        </>
    )
}

export default Header
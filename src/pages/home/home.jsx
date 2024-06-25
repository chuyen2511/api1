import React, { useState } from "react";
import './home.css'
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";

const Home =({sidebar})=>{

    const [category,setCategory] = useState(0);

    return(
        <>
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}  />
            <div className={`container ${sidebar? "":'large-container'}`}>

            {/* container chính là class chính kia là 1 biểu thức điều kiện 
            kiểm tra nếu đúng là sidebar thì nó sẽ trả về chuỗi rỗng còn ko phait thì nó thêm
            cho div 1 class mới là large-container  */}
            
                <Feed category={category}/>
            </div>
        </>
    );
};

export default Home;
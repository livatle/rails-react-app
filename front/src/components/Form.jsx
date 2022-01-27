import React from "react";

const Form = (props) => {
    const { handleChange, handleSubmit, value, buttonType } = props
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">名前: </label>
                    <input type="text" name="name" id="name" onChange={(e) => handleChange(e)} value={value.name}/>
                </div>
                <div>
                    <label htmlFor="content">内容: </label>
                    <textarea type="text" name="content" id="content" onChange={(e) => handleChange(e)} value={value.content}/>
                </div>
                <input type="submit" value={buttonType} onClick={(e) => handleSubmit(e)}/>
            </form>
        </div>
    )
}

export default Form;
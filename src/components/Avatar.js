import React, { useState } from "react";
import faker from "faker";

function Avatar() {
    const avatarInputEleRef = React.createRef();
    const [avatar, setAvatar] = useState(faker.image.avatar());

    const handleLoad = e => URL.revokeObjectURL(e.target.src);
    const handleDoubleClick = () => avatarInputEleRef.current.click();
    const handleChange = e => {
        e.target.files[0].type.split("/")[0] === "image" ?
        setAvatar(URL.createObjectURL(e.target.files[0])) :
        alert("Invalid Upload: Only Image Files Allowed.");
    }

    return (
        <div>
            <input id="avatar-input-ele" type="file" accept="image/*" onChange={handleChange} ref={avatarInputEleRef} />
            <img id="avatar" src={avatar} alt="Avatar" onDoubleClick={handleDoubleClick} onLoad={handleLoad} />
        </div>
    )
}
export default Avatar;
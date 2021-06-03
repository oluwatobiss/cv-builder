import { useState } from "react";
import faker from "faker";
import ElementMaker from "./ElementMaker";

function Address() {
    const [myContactStreetName, setMyContactStreetName] = useState({text: `73 ${faker.address.streetName()}`, showInputEle: false});
    const [myContactCityName, setMyContactCityName] = useState({text: faker.address.cityName(), showInputEle: false});
    const [myContactZipCode, setMyContactZipCode] = useState({text: faker.address.zipCode(), showInputEle: false});
    const [myContactCountry, setMyContactCountry] = useState({text: faker.address.country(), showInputEle: false});

    return (
        <div>
            <p className="subHeader">Address</p>
            <ElementMaker name="myContactStreetName"
                mutableTagType="input"
                type="text"
                placeholder="Street Name"
                staticTagType="p"
                text={myContactStreetName.text}
                handleEleDoubleClick={() => setMyContactStreetName({...myContactStreetName, showInputEle: true})}
                handleEleChange={e => setMyContactStreetName({...myContactStreetName, text: e.target.value})}
                handleEleBlur={() => setMyContactStreetName({...myContactStreetName, showInputEle: false})}
                showInputEle={myContactStreetName.showInputEle}
            />
            <p>
                <ElementMaker name="myContactCityName"
                    mutableTagType="input"
                    type="text"
                    placeholder="City"
                    staticTagType="span"
                    text={myContactCityName.text}
                    handleEleDoubleClick={() => setMyContactCityName({...myContactCityName, showInputEle: true})}
                    handleEleChange={e => setMyContactCityName({...myContactCityName, text: e.target.value})}
                    handleEleBlur={() => setMyContactCityName({...myContactCityName, showInputEle: false})}
                    showInputEle={myContactCityName.showInputEle}
                />
                <span>, </span>
                <ElementMaker name="myContactZipCode"
                    mutableTagType="input"
                    type="text"
                    placeholder="Zip Code"
                    staticTagType="span"
                    text={myContactZipCode.text}
                    handleEleDoubleClick={() => setMyContactZipCode({...myContactZipCode, showInputEle: true})}
                    handleEleChange={e => setMyContactZipCode({...myContactZipCode, text: e.target.value})}
                    handleEleBlur={() => setMyContactZipCode({...myContactZipCode, showInputEle: false})}
                    showInputEle={myContactZipCode.showInputEle}
                />
            </p>
            <ElementMaker name="myContactCountry"
                mutableTagType="input"
                type="text"
                placeholder="Country"
                staticTagType="p"
                text={myContactCountry.text}
                handleEleDoubleClick={() => setMyContactCountry({...myContactCountry, showInputEle: true})}
                handleEleChange={e => setMyContactCountry({...myContactCountry, text: e.target.value})}
                handleEleBlur={() => setMyContactCountry({...myContactCountry, showInputEle: false})}
                showInputEle={myContactCountry.showInputEle}
            />
        </div>
    )
}

export default Address;
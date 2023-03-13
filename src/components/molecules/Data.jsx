import Input from "../atoms/Input";
import Label from "../atoms/Label";
import "../../assets/styles/molecules.css";

function Data({text,type,placeholder,name}) {
    return ( 
        <div className="Data">
            <Label text={text} />
            <Input type={type} placeholder={placeholder} name={name} />
        </div>
     );
}

export default Data;


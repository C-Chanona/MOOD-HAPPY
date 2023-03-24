import Input from "../atoms/Input";
import Label from "../atoms/Label";
import "../../assets/styles/molecules.css";

function Data({text,type,placeholder,name,color}) {
    return ( 
        <div className="Data">
            <Label text={text} color={color} />
            <Input type={type} placeholder={placeholder} name={name} />
        </div>
     );
}

export default Data;


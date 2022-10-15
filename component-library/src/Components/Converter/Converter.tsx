import { useState } from 'react';
import { converterJson, lengthUnitsList, weightUnitsList, conversionList } from "../../Static/jsons/converter";

interface ConversionItem {
    label: string,
    value: string,
 }

const Converter = () => {
    const [convertFrom, setConvertFrom] = useState<string>("");
    const [convertTo, setConvertTo] = useState<string>("");
    const [selectedFormat, setSelectedFormat] = useState<Array<ConversionItem>>([]);
    const [selectedValue, setSelectedValue] = useState<number>(0);
    const onSelectConvertFrom = (event: any) => {
        setConvertFrom(event.target.value)
    }
    const onSelectConvertTo = (event: any) => {
        setConvertTo(event.target.value)
    }
    const onSetValue = (event: any) => {
        setSelectedValue(event.target.value)
    }
    const setConvertedValue = () => {
        const selectedOption = converterJson.find(item => item.from === convertFrom && item.to === convertTo)
        if (selectedOption)
            return selectedValue * selectedOption.mFactor;
    }
    const onSelectConversionType = (event: any) => {
        setConvertFrom("");
        setConvertTo("");
        if (event.target.value === 'length') {
            setSelectedFormat(lengthUnitsList);
        } else if (event.target.value === 'weight') {
            setSelectedFormat(weightUnitsList);
        }
    }
    return (
        <>
            <div className="m-4">
                <h2 className="header"> Unit Converter </h2>
                <div className="form-group">
                    <label className='sub-header'>Enter value</label>
                    <input type="number" className="form-control" placeholder="Enter value" onChange={onSetValue} />
                </div>
                <div className="form-group">
                    <label className='sub-header'>Select format</label>
                    <select className="custom-select" onChange={(e) => { onSelectConversionType(e) }}>
                        <option value=""> Choose... </option>
                        {conversionList.map((item) => <option value={item.value}> {item.label} </option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label className='sub-header'>From</label>
                    <select className="custom-select" onChange={(e) => onSelectConvertFrom(e)} value={convertFrom}>
                        <option value=""> Choose... </option>
                        {selectedFormat.map((item) => <option value={item.value}> {item.label} </option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label className='sub-header'>To</label>
                    <select className="custom-select" onChange={(e) => onSelectConvertTo(e)} value={convertTo}>
                        <option value=""> Choose... </option>
                        {selectedFormat.map((item) => <option value={item.value}> {item.label} </option>)}
                    </select>
                </div>
                {setConvertedValue() && convertTo && convertFrom &&
                    <div className="form-group">
                        <label>{`Converted value: ${setConvertedValue()}`}</label>
                    </div>
                }
            </div>
        </>
    )
}

export default Converter;
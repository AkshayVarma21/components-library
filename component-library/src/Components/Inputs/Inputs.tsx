const Inputs = () => {

    return (
        <div className="px-3">
            <div className="header mb-2">Input Fields</div>

            {/* Inputs */}
            <div className="sub-header my-4">Inputs</div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>

            {/* Input Sizes */}
            <div className="sub-header my-4">Input Sizes</div>
            <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
            <input className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
            <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"></input>

            {/* Disabled */}
            <div className="sub-header my-4">Input Disabled</div>
            <input className="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled />


            {/* Read only input */}
            <div className="sub-header my-4">Read Only Input</div>
            <input className="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readOnly />


            {/* Dropdown */}
            <div className="sub-header my-4">Dropdown</div>
            <select className="form-select" aria-label="Default select example" defaultValue={"1"}>
                <option >Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            {/* Dropdown Sizes*/}
            <div className="sub-header my-4">Dropdown Sizes</div>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue={"1"}>
                <option >Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>


            {/* Dropdown Disabled*/}
            <div className="sub-header my-4">Dropdown Disabled</div>
            <select className="form-select" aria-label="Disabled select example" disabled defaultValue={"1"}> 
                <option >Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <select className="form-select form-select-sm" aria-label=".form-select-sm example" defaultValue={"1"}>
                <option >Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            {/* File upload types*/}
            <div className="sub-header my-4">File Upload Types</div>
            <div className="mb-3">
                <label className="form-label">Default file input example</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mb-3">
                <label className="form-label">Multiple files input example</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div className="mb-3">
                <label className="form-label">Disabled file input example</label>
                <input className="form-control" type="file" id="formFileDisabled" disabled />
            </div>
            <div className="mb-3">
                <label className="form-label">Small file input example</label>
                <input className="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
            <div>
                <label className="form-label">Large file input example</label>
                <input className="form-control form-control-lg" id="formFileLg" type="file" />
            </div>
        </div>
    )
}

export default Inputs;
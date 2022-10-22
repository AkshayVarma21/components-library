const Buttons = () => {
    return (
        <div className="px-3">
            <div className="header mb-2">Buttons</div>
            {/* Solid buttons section */}
            <div className="sub-header my-4">Solid Buttons</div>
            <button type="button" className="btn btn-primary mx-2">Primary</button>
            <button type="button" className="btn btn-secondary mx-2">Secondary</button>
            <button type="button" className="btn btn-success mx-2">Success</button>
            <button type="button" className="btn btn-danger mx-2">Danger</button>
            <button type="button" className="btn btn-warning mx-2">Warning</button>
            <button type="button" className="btn btn-info mx-2">Info</button>
            <button type="button" className="btn btn-light mx-2">Light</button>
            <button type="button" className="btn btn-dark mx-2">Dark</button>

            {/* Outline buttons section */}
            <div className="sub-header my-4">Outline Buttons</div>
            <button type="button" className="btn btn-outline-primary mx-2">Primary</button>
            <button type="button" className="btn btn-outline-secondary mx-2">Secondary</button>
            <button type="button" className="btn btn-outline-success mx-2">Success</button>
            <button type="button" className="btn btn-outline-danger mx-2">Danger</button>
            <button type="button" className="btn btn-outline-warning mx-2">Warning</button>
            <button type="button" className="btn btn-outline-info mx-2">Info</button>
            <button type="button" className="btn btn-outline-light mx-2">Light</button>
            <button type="button" className="btn btn-outline-dark mx-2">Dark</button>

            {/* Button sizes */}
            <div className="sub-header my-4">Button Size Variations</div>
            <button type="button" className="btn btn-primary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-secondary btn-sm mx-2">Small button</button>
            <button type="button" className="btn btn-primary btn-lg mx-2">Large button</button>
            <button type="button" className="btn btn-secondary btn-lg mx-2">Large button</button>


            {/* Disabled state*/}
            <div className="sub-header my-4">Disabled Button</div>
            <button type="button" className="btn btn-primary mx-2" disabled>Primary button</button>
            <button type="button" className="btn btn-secondary mx-2" disabled>Button</button>
            <button type="button" className="btn btn-outline-primary mx-2" disabled>Primary button</button>
            <button type="button" className="btn btn-outline-secondary mx-2" disabled>Button</button>

            {/* Toggle */}
            <div className="sub-header my-4">Toggle Button</div>
            <button type="button" className="btn btn-primary mx-2" data-bs-toggle="button">Toggle button</button>
            <button type="button" className="btn btn-primary active mx-2" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
            <button type="button" className="btn btn-primary mx-2" disabled data-bs-toggle="button">Disabled toggle button</button>

            {/* Link*/}
            <div className="sub-header my-2">Link Button</div>
            <button type="button" className="btn btn-link mx-2">Link</button>
        </div>

    )
}

export default Buttons;
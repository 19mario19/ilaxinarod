import React, { useState } from 'react';

function Footer({text}) {

    return (
        <div className="footer">
            <p>{text}</p>
        </div>
    );
}

export default Footer;
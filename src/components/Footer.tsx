import React from 'react'
import dayjs from 'dayjs';
import Twemoji from 'react-twemoji';

export default function Footer() {
    return (
        <div className="footer">
            <Twemoji options={{ className: 'twemoji', ext: '.svg', size: "svg" }}>
                <div className="footer_container">
                        <p>© {dayjs().year()} Stringy Software.</p>
                        <p>Made with <span role="img" aria-label="love">❤</span> by Stringy</p>
                </div>
            </Twemoji>
        </div>
    )
}

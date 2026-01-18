import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";

const Footer = () => {
return (
    <div class="footer_outer_container">
    <div class="footer_inner_container">
        <div class="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
        </div>
        <div class="footer_data">
            <div class="footer_column">
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notice</li>
                    <li>Help Center</li>
                </ul>
            </div>
            <div class="footer_column">
                <ul>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <div class="footer_column">
                <ul>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                    <li>Media Center</li>
                </ul>
            </div>
            <div class="footer_column">
                <ul>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div class="service_code">
            <p>Service Code</p>
        </div>
        <div class="copy-write">
            &copy; 1997-2024 Netflix, Inc.
        </div>
    </div>
</div>
)
}

export default Footer
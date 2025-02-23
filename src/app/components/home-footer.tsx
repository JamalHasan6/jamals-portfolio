import Link from "next/link";

const HomeFooter = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center m-10">
            {/* Navigation Links */}
            {/* <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <Link className="hover:text-gray-900" href="/">Home</Link>
                <Link className="hover:text-gray-900" href="/about">About</Link>
                <Link className="hover:text-gray-900" href="/services">Services</Link>
                <Link className="hover:text-gray-900" href="/media">Media</Link>
                <Link className="hover:text-gray-900" href="/gallery">Gallery</Link>
                <Link className="hover:text-gray-900" href="/contact">Contact</Link>
            </nav> */}

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-center text-gray-700 font-medium">
                &copy; {new Date().getFullYear()} Company Ltd. All rights reserved.
            </p>
        </footer>
    );
};

export default HomeFooter;

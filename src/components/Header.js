import logo from "../assets/Logo.png";

const Header = () => {
    return (
        <div className="flex flex-row p-5 justify-center items-center bg-gradient-to-r from-[#672280] to-[#A626D3] text-white">
            <div className="flex justify-center items-center">
                <img className="w-8 mr-2" src={logo} alt="meme generator"/>
                <p>Meme Generator</p>
            </div>
        </div>
    )
}

export default Header;
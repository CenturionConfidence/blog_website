

export default function Header() {
    return(
    <div className="px-10 items-center">
        <div className="text-2xl font-bold px-5 flex">Anor</div>
        <div className="flex justify-between">
            <ul className="flex gap-5 font-semibold">
                <li>Home</li>
                <li>About us</li>
                <li>Membership</li>
                <li>Tags</li>
                <li>Author</li>
                <li>Contact</li>
            </ul>
            <div>
                <div></div>
                <button className="px-10 py-2 border-2 border-black rounded-full font-bold">Sign up</button>
            </div>
        </div>
    </div>
    )
}
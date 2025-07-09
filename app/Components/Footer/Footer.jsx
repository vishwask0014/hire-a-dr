export default function Footer() {
    return (
        <footer className="bg-primary text-white text-sm py-6 px-4 mt-10">
            <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4 lg:px-0">
                <p>&copy; {new Date().getFullYear()} HealthConnect. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-secondary transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}

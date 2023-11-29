import MainHeader from 'src/comps/header/MainHeader';
import './global.css'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'John Le Houillier\'s Portfolio',
  description: 'This is my portfolio!',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body>
          <div className="container-fluid">
            <MainHeader/>
            {children}
          </div>
      </body>
    </html>
  )
}

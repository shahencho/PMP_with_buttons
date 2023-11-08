import { Suspense } from 'react';
import { classNames } from 'utils/classNames';
import { AppRouter } from 'app/router/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
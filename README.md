# Next.js and Tailwind CSS Starter Kit

```jsx
import Document, {Head, Html, Main, NextScript } from 'next/document';

class myDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);
        return { ...initialProps }
    }

    render () {
        return (
            <Html lang={this.props.locale}>
                <Head>
                </Head>
                <body>
                    </main>
                    <NextScript />
                </body>
            </Html>
        );
        }
}

export default MyDocument;

```
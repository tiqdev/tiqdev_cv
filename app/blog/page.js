
import Container from "@/components/Container";
import BlogList from "@/components/BlogList";


export default function Blog() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-primary relative">
            <Container>
                <BlogList />
            </Container>
        </main>
    );
}

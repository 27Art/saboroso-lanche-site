
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to our custom HTML page
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecionando para a Lanchonete...</h1>
        <p className="text-xl text-muted-foreground">Se não foi redirecionado automaticamente, <a href="/index.html" className="text-blue-500 underline">clique aqui</a>.</p>
      </div>
    </div>
  );
};

export default Index;

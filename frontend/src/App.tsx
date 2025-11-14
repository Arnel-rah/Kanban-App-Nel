import MainLayout from './components/layout/MainLayout';

export default function App() {
  return (
    <MainLayout>
      {/* TON CONTENU ICI */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <p className="text-base-content/70">
          Bienvenue dans ton gestionnaire de budget.
        </p>

        {/* Exemple de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-base-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">Solde</h3>
            <p className="text-3xl font-bold text-primary mt-2">12 450 €</p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">Dépenses</h3>
            <p className="text-3xl font-bold text-error mt-2">-2 180 €</p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold">Épargne</h3>
            <p className="text-3xl font-bold text-success mt-2">+850 €</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
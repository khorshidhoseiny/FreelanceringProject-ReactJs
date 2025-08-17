import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black text-sm text-secondary-700 md:text-xl mb-8">
        لیست پروپوزال ها
      </h1>
      <ProposalTable />
    </div>
  );
}
export default Proposals;

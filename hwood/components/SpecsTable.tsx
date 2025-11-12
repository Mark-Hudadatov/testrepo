interface SpecsTableProps {
  specs: { name: string; value: string }[];
}

export function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-light/80 bg-white shadow-sm">
      <table className="w-full text-right text-sm">
        <tbody>
          {specs.map((spec) => (
            <tr key={spec.name} className="border-b border-light/70 last:border-none">
              <th className="bg-light/60 px-4 py-3 text-dark/70 sm:w-1/3">{spec.name}</th>
              <td className="px-4 py-3 text-dark">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpecsTable;

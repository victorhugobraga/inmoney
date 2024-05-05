import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Transactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>May 3, 2024</TableCell>
              <TableCell>Deposit</TableCell>
              <TableCell className="text-green-500">+$1,000.00</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>April 28, 2024</TableCell>
              <TableCell>Withdrawal</TableCell>
              <TableCell className="text-red-500">-$500.00</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>April 15, 2024</TableCell>
              <TableCell>Transfer</TableCell>
              <TableCell className="text-red-500">-$250.00</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>April 10, 2024</TableCell>
              <TableCell>Deposit</TableCell>
              <TableCell className="text-green-500">+$2,000.00</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>April 5, 2024</TableCell>
              <TableCell>Withdrawal</TableCell>
              <TableCell className="text-red-500">-$750.00</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

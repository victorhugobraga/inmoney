import { Rows3Icon, Table2 } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function TransactionSummary() {
  return (
    <Tabs defaultValue="cards">
      <TabsContent value="tabela">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7 flex flex-row items-center justify-between flex-wrap gap-4">
            <div>
              <CardTitle className="flex">Resumo</CardTitle>
            </div>

            <div className="flex justify-end">
              <TabsList className="w-fit">
                <TabsTrigger value="cards">
                  <Rows3Icon />
                </TabsTrigger>
                <TabsTrigger value="tabela">
                  <Table2 />
                </TabsTrigger>
              </TabsList>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead className="hidden sm:table-cell">Tipo</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Data</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-accent">
                  <TableCell>
                    <div className="font-medium">Spotify</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Despesa
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Débito
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023/06/23
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Spotify</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Despesa
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Débito
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023/06/25
                  </TableCell>
                  <TableCell className="text-right">R$ 11,90</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Spotify</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Despesa
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Débito
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023/06/25
                  </TableCell>
                  <TableCell className="text-right">R$ 11,90</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Spotify</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Despesa
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Débito
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023/06/25
                  </TableCell>
                  <TableCell className="text-right">R$ 11,90</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Spotify</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Despesa
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Débito
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023/06/25
                  </TableCell>
                  <TableCell className="text-right">R$ 11,90</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cards">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7 flex flex-row items-center justify-between flex-wrap gap-4">
            <div>
              <CardTitle className="flex">Resumo</CardTitle>
            </div>

            <div className="flex justify-end">
              <TabsList className="w-fit">
                <TabsTrigger value="cards">
                  <Rows3Icon />
                </TabsTrigger>
                <TabsTrigger value="tabela">
                  <Table2 />
                </TabsTrigger>
              </TabsList>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between py-4 sm:px-8 px-4">
                  <div>
                    <CardTitle>Spotify</CardTitle>
                    <CardDescription>
                      <span>há um mês</span>
                    </CardDescription>
                  </div>

                  <div className="grid">
                    <span className="text-2xl font-bold">
                      <small className="text-sm text-green-600 dark:text-green-400">
                        R$
                      </small>{" "}
                      11,90
                    </span>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between py-4 sm:px-8 px-4">
                  <div>
                    <CardTitle>Spotify</CardTitle>
                    <CardDescription>
                      <span>há um mês</span>
                    </CardDescription>
                  </div>

                  <div className="grid">
                    <span className="text-2xl font-bold">
                      <small className="text-sm text-green-600 dark:text-green-400">
                        R$
                      </small>{" "}
                      11,90
                    </span>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between py-4 sm:px-8 px-4">
                  <div>
                    <CardTitle>Spotify</CardTitle>
                    <CardDescription>
                      <span>há um mês</span>
                    </CardDescription>
                  </div>

                  <div className="grid">
                    <span className="text-2xl font-bold">
                      <small className="text-sm text-green-600 dark:text-green-400">
                        R$
                      </small>{" "}
                      11,90
                    </span>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between py-4 sm:px-8 px-4">
                  <div>
                    <CardTitle>Spotify</CardTitle>
                    <CardDescription>
                      <span>há um mês</span>
                    </CardDescription>
                  </div>

                  <div className="grid">
                    <span className="text-2xl font-bold">
                      <small className="text-sm text-green-600 dark:text-green-400">
                        R$
                      </small>{" "}
                      11,90
                    </span>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between py-4 sm:px-8 px-4">
                  <div>
                    <CardTitle>Spotify</CardTitle>
                    <CardDescription>
                      <span>há um mês</span>
                    </CardDescription>
                  </div>

                  <div className="grid">
                    <span className="text-2xl font-bold">
                      <small className="text-sm text-green-600 dark:text-green-400">
                        R$
                      </small>{" "}
                      11,90
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

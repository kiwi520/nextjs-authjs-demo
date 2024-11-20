import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const Dashboard = () => {
  return (
    <div className={"flex min-h-screen w-full"}>
      <div className="flex-1 bg-gray-100 dark:bg-gray-900">
          <div className="p-6 grid gap-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                      <CardHeader className={"flex flex-grow items-center justify-between pb-2"}>
                          <CardTitle className={"text-sm font-medium"}>Total Revenue</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <div className={"text-2xl font-medium"}>$45,231.87</div>
                          <p>+20.1% from last month</p>
                      </CardContent>
                  </Card>

                  <Card>
                      <CardHeader className={"flex flex-grow items-center justify-between pb-2"}>
                          <CardTitle className={"text-sm font-medium"}>Subscriptions</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <div className={"text-2xl font-medium"}>+2350</div>
                          <p>+20.1% from last month</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader className={"flex flex-grow items-center justify-between pb-2"}>
                          <CardTitle className={"text-sm font-medium"}>Sales</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <div className={"text-2xl font-medium"}>+12134</div>
                          <p>+11% from last month</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader className={"flex flex-grow items-center justify-between pb-2"}>
                          <CardTitle className={"text-sm font-medium"}>Active Now</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <div className={"text-2xl font-medium"}>+573</div>
                          <p>+201 since last day</p>
                      </CardContent>
                  </Card>
              </div>

              <div className="grid gap-6">
                  <Card>
                      <CardHeader className={"flex flex-grow items-center justify-between pb-2"}>
                          <CardTitle className={"text-sm font-medium"}>Recent Signups</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <Table>
                              <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Plan</TableHead>
                                        <TableHead>Signup Date</TableHead>
                                    </TableRow>
                              </TableHeader>
                              <TableBody>
                                  <TableRow>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>JohnDoe@111.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-04-16</TableCell>
                                  </TableRow>
                              </TableBody>
                          </Table>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard;

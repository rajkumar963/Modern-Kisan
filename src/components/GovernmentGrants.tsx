
import React from 'react';
import { IndianRupee, Award, Calendar, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const GovernmentGrants = () => {
  const grantCategories = [
    { id: 'crop', label: 'Crop Subsidy' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'irrigation', label: 'Irrigation' },
    { id: 'organic', label: 'Organic Farming' },
  ];

  const grants = {
    crop: [
      {
        id: 'pmksy',
        title: 'PM-KISAN Samman Nidhi',
        amount: '₹6,000 per year',
        deadline: 'Ongoing',
        description: 'Direct income support of ₹6,000 per year in three equal installments to all land-holding farmer families.',
        eligibility: 'All land-holding farmers with cultivable land.',
        link: 'https://pmkisan.gov.in/'
      },
      {
        id: 'nfsm',
        title: 'National Food Security Mission',
        amount: 'Up to ₹50,000 per hectare',
        deadline: 'Seasonal application',
        description: 'Support for increasing production of rice, wheat, pulses, coarse cereals, and commercial crops.',
        eligibility: 'Small and marginal farmers growing targeted crops.',
        link: 'https://www.nfsm.gov.in/'
      },
    ],
    equipment: [
      {
        id: 'smam',
        title: 'Sub-Mission on Agricultural Mechanization',
        amount: '40-50% subsidy',
        deadline: 'Year-round',
        description: 'Financial assistance for purchasing agricultural machinery and equipment.',
        eligibility: 'Individual farmers, cooperatives, and FPOs.',
        link: 'https://farmech.dac.gov.in/'
      },
      {
        id: 'custom-hiring',
        title: 'Custom Hiring Centers',
        amount: 'Up to ₹25 lakh',
        deadline: 'Quarterly review',
        description: 'Establish custom hiring centers for farm equipment to be used by small farmers.',
        eligibility: 'Entrepreneurs, cooperatives, and self-help groups.',
        link: 'https://agrimachinery.nic.in/'
      },
    ],
    irrigation: [
      {
        id: 'pmksy',
        title: 'Pradhan Mantri Krishi Sinchayee Yojana',
        amount: 'Up to 55% subsidy',
        deadline: 'Seasonal application',
        description: 'Support for micro-irrigation systems such as drip and sprinkler irrigation.',
        eligibility: 'All categories of farmers.',
        link: 'https://pmksy.gov.in/'
      },
      {
        id: 'didf',
        title: 'Micro Irrigation Fund',
        amount: 'Low-interest loans',
        deadline: 'Year-round',
        description: 'Special funding for implementing water-efficient irrigation systems.',
        eligibility: 'Small and marginal farmers in water-stressed areas.',
        link: 'https://pib.gov.in/PressReleasePage.aspx?PRID=1579971'
      },
    ],
    organic: [
      {
        id: 'pkvy',
        title: 'Paramparagat Krishi Vikas Yojana',
        amount: '₹50,000 per hectare',
        deadline: 'Seasonal cycle',
        description: 'Support for organic farming adoption and certification.',
        eligibility: 'Farmers willing to convert to organic farming practices.',
        link: 'https://pgsindia-ncof.gov.in/'
      },
      {
        id: 'movcdner',
        title: 'Mission Organic Value Chain Development',
        amount: 'Up to ₹2 lakh',
        deadline: 'Application cycle in April',
        description: 'Support for organic farming in North Eastern Region through value chain approach.',
        eligibility: 'Farmers in North-Eastern states practicing organic farming.',
        link: 'https://agricoop.nic.in/en/divisiontype/horticulture/programmes-schemes-and-initiatives'
      },
    ],
  };

  const renderGrant = (grant: any) => (
    <Card key={grant.id} className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{grant.title}</span>
          <span className="text-kisan-600 font-medium text-sm bg-kisan-50 px-3 py-1 rounded-full">
            {grant.amount}
          </span>
        </CardTitle>
        <CardDescription className="flex items-center gap-2 mt-2">
          <Calendar className="h-4 w-4" /> 
          <span>Deadline: {grant.deadline}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{grant.description}</p>
        <Alert className="bg-kisan-50 border-kisan-100">
          <AlertTitle className="text-sm font-medium text-kisan-800">Eligibility:</AlertTitle>
          <AlertDescription className="text-sm text-kisan-700">{grant.eligibility}</AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={grant.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Link className="h-4 w-4" /> Apply on Official Website
          </a>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section id="government-grants" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="chip bg-kisan-50 text-kisan-700 mb-4">Financial Support</span>
          <h2 className="section-title text-kisan-900">Government Grants</h2>
          <p className="section-subtitle">
            Discover agricultural subsidies and financial assistance programs to
            support your farming ventures and increase productivity.
          </p>
        </div>

        <Tabs defaultValue="crop" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-kisan-50 p-1">
              {grantCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(grants).map(([category, categoryGrants]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
                {categoryGrants.map(renderGrant)}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Alert className="max-w-2xl mx-auto bg-yellow-50 border-yellow-200">
            <AlertTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" /> 
              Need help with applications?
            </AlertTitle>
            <AlertDescription>
              Our experts can guide you through the grant application process. 
              Join our premium membership for personalized assistance with document preparation and submission.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

export default GovernmentGrants;

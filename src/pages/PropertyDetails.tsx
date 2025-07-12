import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getPropertyById } from '@/data/properties';
import { 
  MapPin, Bed, Bath, Square, Calendar, ArrowLeft, 
  Phone, Mail, MessageSquare, Star 
} from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || '');

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The property you're looking for doesn't exist.
          </p>
          <Button variant="premium" asChild>
            <Link to="/properties">Back to Properties</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/properties">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Link>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute top-6 left-6">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {property.type}
            </Badge>
          </div>
          <div className="absolute top-6 right-6">
            <Badge variant="default" className="bg-accent text-accent-foreground font-bold text-lg px-4 py-2">
              {property.price}
            </Badge>
          </div>
          <div className="absolute bottom-6 left-6">
            <Badge 
              variant={property.status === 'For Sale' ? 'default' : 'secondary'}
              className={property.status === 'For Sale' ? 'bg-green-600' : 'bg-blue-600'}
            >
              {property.status}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Info */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                {property.title}
              </h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>

              {/* Property Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center text-primary">
                  <Bed className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center text-primary">
                  <Bath className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center text-primary">
                  <Square className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{property.area} sqft</span>
                </div>
                <div className="flex items-center text-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Built {property.year}</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-primary mb-4">About This Property</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.gallery.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg group">
                    <img
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6">Contact Agent</h3>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-primary mb-3">Property Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Type:</span>
                      <span className="font-medium">{property.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built:</span>
                      <span className="font-medium">{property.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="font-medium">{property.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property ID:</span>
                      <span className="font-medium">#{property.id.padStart(6, '0')}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <Button variant="premium" className="w-full" size="lg" asChild>
                    <Link to="/contact">
                      Schedule Viewing
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
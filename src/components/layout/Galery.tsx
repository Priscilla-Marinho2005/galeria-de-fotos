interface Photo {
     id: number;
     url: string;
     name: string;
}

interface GaleryProps {
     searchTerm: string;
}

function Galery({ searchTerm }: GaleryProps) {

     const photos: Photo[] = [
          { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', name: 'Montanha Nevada' },
          { id: 2, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop', name: 'Praia Tropical' },
          { id: 3, url: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&h=300&fit=crop', name: 'Floresta Verde' },
          { id: 4, url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop', name: 'Céu Estrelado' },
          { id: 5, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', name: 'Montanhas Tranquilas' },
          { id: 6, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', name: 'Pôr do Sol' },
          { id: 7, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', name: 'Trilha na Floresta' },
          { id: 8, url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop', name: 'Vale Verde' }
     ];

     const filteredPhotos = photos.filter(photo =>
          photo.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

     return (
          <div className="poppins container mx-auto px-15 py-8">
               {filteredPhotos.length === 0 ? (
                    <div className="text-center py-16">
                         <p className="text-2xl text-gray-600 font-semibold">
                              Nenhuma foto encontrada
                         </p>
                         <p className="text-gray-500 mt-2">
                              Tente pesquisar com outras palavras-chave
                         </p>
                    </div>
               ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
                         {filteredPhotos.map((photo) => (
                              <div
                                   key={photo.id}
                                   className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                              >

                                   <div className="aspect-1 overflow-hidden">
                                        <img
                                             src={photo.url}
                                             alt={photo.name}
                                             className="w-full h-full object-cover"
                                        />
                                   </div>
                                   
                                   <div className="p-4">
                                        <h3 className="text-center text-lg font-semibold text-gray-800">
                                             {photo.name}
                                        </h3>
                                   </div>
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
}

export default Galery;
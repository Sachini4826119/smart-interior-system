package com.sims.backend.service;

import com.sims.backend.entity.Room;
import com.sims.backend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public List<Room> getAllRooms() { return roomRepository.findAll(); }
    public Room createRoom(Room room) { return roomRepository.save(room); }
    public Room updateRoom(Long id, Room room) {
        Optional<Room> existing = roomRepository.findById(id);
        if(existing.isPresent()) { room.setId(id); return roomRepository.save(room); }
        throw new RuntimeException("Room not found");
    }
    public void deleteRoom(Long id) { roomRepository.deleteById(id); }
}
